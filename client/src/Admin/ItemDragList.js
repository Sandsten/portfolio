import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DraggableItem = styled.div`
  padding: 10px;
  border: 1px black solid;
  border-radius: 2px;
  margin-bottom: 5px;

  :hover {
    cursor: move;
  }
`;

const ItemDragList = ({ items, onNewItemOrder, disabled }) => {
  const [dragList, setDragList] = useState(null);
  const [draggedProject, setDraggedProject] = useState(null);

  useEffect(() => {
    setDragList(items);
    return () => {};
  }, []);

  console.log(disabled);

  if (!dragList) return null;

  const dragStartHandler = ev => {
    // Store the dragged item in state
    var draggedItemIndex = ev.target.id;
    setDraggedProject(dragList[draggedItemIndex]);

    ev.dataTransfer.setData('required', draggedItemIndex);

    // ev.dataTransfer.effectAllowed = "move";
    console.log('Dragging has started!');
  };

  const dragOverHandler = ev => {
    ev.preventDefault(); // This is needed in order to stop the animation when droping an item
    ev.dataTransfer.dropEffect = 'move';
    // Index of project we are hovering over
    var dragOverIndex = ev.target.id;

    // Copy of array, don't manipulate state variable directly
    var newList = [...dragList];

    // Delete dragged project from the list, so it only appear once
    newList = newList.filter(project => project.title !== draggedProject.title);

    // Insert dragged project at the position we are hovering over
    newList.splice(dragOverIndex, 0, draggedProject);

    setDragList(newList);
  };

  const onDragEndHandler = ev => {
    ev.dataTransfer.dropEffect = 'none';
    setDraggedProject(null);
  };

  return (
    <>
      {dragList.map((project, i) => {
        return (
          <DraggableItem
            id={i} // use this as index
            key={project._id}
            draggable
            onDragStart={dragStartHandler}
            onDragOver={dragOverHandler}
            onDragEnd={onDragEndHandler}
          >
            {project.title}
          </DraggableItem>
        );
      })}
      <button onClick={() => onNewItemOrder(dragList)} disabled={disabled}>
        Save
      </button>
    </>
  );
};

export default ItemDragList;
