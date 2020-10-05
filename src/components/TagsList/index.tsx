import React, { useState, useRef, useEffect, RefObject } from "react";
import OutsideClickHandler from 'react-outside-click-handler';
import PropTypes from "prop-types";
import { Tag, Input, Tooltip, Button } from "antd";
import { PlusOutlined, BgColorsOutlined, SyncOutlined, CloseCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { darken } from "polished";
import { SketchPicker } from "react-color";
import create from "@ant-design/icons/lib/components/IconFont";

const DEFAULT_COLOR = "#ECECEC";

const Wrapper = styled.div`
  width: 200px;
  span {
  }

  .site-tag-plus {
    background: transparent;
    border-style: dashed;
  }

  .edit-tag {
    user-select: none;
  }
  .tag-input {
    width: 78px;
    margin-right: 8px;
    vertical-align: top;
  }
`;

const Color = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  border: 1px solid ${darken(0.3, DEFAULT_COLOR)};
`;

interface IRedactorValue {
  id?: string;
  name: string;
  color: string;
  loading?: boolean;
  error?: boolean;
}

function TagsList({ items, loading, error, onCreate, onUpdate, onDelete }) {
  useEffect(() => {
    setTags(items);
  }, [items]);

  const [tags, setTags] = useState<any>(items);
  const [redactorVisible, setRedactorVisible] = useState(false);
  const [redactorValue, setRedactorValue] = useState<IRedactorValue>({
    name: "",
    color: "",
  });
  const [editRedactorIndex, setEditRedactorIndex] = useState(-1);
  const [editRedactorValue, setEditRedactorValue] = useState<IRedactorValue>({
    loading: false,
    error: false,
    name: "",
    color: "",
  });

  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const [editColorPickerVisible, setEditColorPickerVisible] = useState(false);


  let editInput = useRef<Input>(null);
  let input = useRef<Input>(null);

  const createTag = (tag) => {
    if (typeof onCreate === "function") {
      onCreate(tag);
    }
  }

  const updateTag = (index, tag) => {
    if (typeof onUpdate === "function") {
      onUpdate(index, tag);
    }
  }

  const deleteTag = (tag) => {
    if (typeof onDelete === "function") {
      onDelete(tag);
    }
  }

  //удаление
  const handleClose = (index, removedTag) => {
    // let nTags: any[] = [...tags];
    // console.log(index)

    // nTags[index] = removedTag;
    // nTags[index].loading = true;

    // setTags(nTags);
    // const filtredTags = tags.filter((tag) => tag !== removedTag);
    deleteTag(removedTag);
    // setTags(filtredTags);
  };

  const showRedactor = () => {
    setRedactorVisible(true);
  };

  const handleEditRedactorChange = (e, tag) => {
    //оптимизировать
    setEditRedactorValue({ name: e.target.value, color: editRedactorValue.color, id: tag._id });
  };

  const handleEditRedactorConfirm = (tag) => {

    const newTags: any[] = [...tags];
    newTags[editRedactorIndex] = editRedactorValue;
    newTags[editRedactorIndex].loading = true;
    newTags[editRedactorIndex]._id = tag._id;
    setTags(newTags);
    setEditRedactorIndex(-1);
    setEditRedactorValue({ name: "", color: "" });

    //отправляем тэг на обновление
    updateTag(editRedactorIndex, newTags[editRedactorIndex]);
  };

  const handleRedactorChange = (e) => {
    setRedactorValue({ name: e.target.value, color: redactorValue.color });
  };

  //создание нового
  const handleInputConfirm = () => {
    if (redactorValue.name && tags.indexOf(redactorValue.name) === -1) {
      let newTags = [...tags, redactorValue]
      setTags(newTags)
      createTag(redactorValue)
    }
    setRedactorVisible(false);
    setRedactorValue({ name: "", color: "" });
    setColorPickerVisible(false)
  };

  const handleColorPicker = () => {
    setColorPickerVisible(!colorPickerVisible);
  };

  const handleEditColorPicker = () => {
    setEditColorPickerVisible(!editColorPickerVisible);
  };

  const handleColorPick = (color) => {
    setRedactorValue({ name: redactorValue.name, color: color.hex });
  };

  const handleEditColorPick = (color, tag) => {
    setEditRedactorValue({ name: editRedactorValue.name, color: color.hex, id: tag.id });

  };

  return (
    <Wrapper>
      {tags.map((tag, index) => {
        if (editRedactorIndex === index) {
          return (
            <OutsideClickHandler
            key={tag._id}
            onOutsideClick={() => handleEditRedactorConfirm(tag)}
            >
            <Input.Group
              compact
            >
              <Input
                ref={editInput}
                key={tag._id}
                size="small"
                className="tag-input"
                value={editRedactorValue.name}
                onChange={ (e) => handleEditRedactorChange(e, tag) }
                onPressEnter={() => handleEditRedactorConfirm(tag)}
              />
              <Button
                onClick={handleEditColorPicker}
                size="small"
                icon={<BgColorsOutlined />}
              >
                <Color style={{ backgroundColor: editRedactorValue.color }} />
              </Button>
            </Input.Group>
            {editColorPickerVisible ? (
            <div>
              <SketchPicker color={editRedactorValue.color} onChange={(color)=> handleEditColorPick(color, tag)} />
            </div>
          ) : null}
            </OutsideClickHandler>
          );
        }

        const isLongTag = tag.title > 20;
        
        let icon;
        if (tag.error) {
          icon = <CloseCircleOutlined />
        } else if (tag.loading) {
          icon = <SyncOutlined spin />
        }

        const tagElem = (
          <Tag
            icon={ icon }
            className="edit-tag"
            key={tag._id}
            closable={true}
            onClose={() => handleClose(index, tag)}
          >
            <span
              onDoubleClick={(e) => {
                if (true) {
                  setEditRedactorIndex(index);
                  setEditRedactorValue({ name: tag.title, color: tag.color });
                  e.preventDefault();
                }
              }}
            >
              {isLongTag ? `${tag.title.slice(0, 20)}...` : tag.title}
            </span>
          </Tag>
        );

        return isLongTag ? (
          <Tooltip title={tag.title} key={tag._id}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}

      {redactorVisible && (
        <OutsideClickHandler
          onOutsideClick={handleInputConfirm}
        >
          <Input.Group compact>
            <Input
              ref={input}
              type="text"
              size="small"
              className="tag-input"
              value={redactorValue.name}
              onChange={handleRedactorChange}
              onPressEnter={handleInputConfirm}
            />
            <Button
              onClick={handleColorPicker}
              size="small"
              icon={<BgColorsOutlined />}
            >
              <Color style={{ backgroundColor: redactorValue.color }} />
            </Button>
          </Input.Group>
          {colorPickerVisible ? (
            <div>
              <SketchPicker color={redactorValue.color} onChange={handleColorPick} />
            </div>
          ) : null}
        </OutsideClickHandler>
      )}
      {!redactorVisible && (
        <Tag className="site-tag-plus" onClick={showRedactor}>
          <PlusOutlined /> New Tag
        </Tag>
      )}
    </Wrapper>
  );
}

TagsList.propTypes = {
  items: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  onCreate: PropTypes.func,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
};

export default TagsList;
