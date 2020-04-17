import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
// import IconButton from "@material-ui/core/IconButton";
// import EditIcon from "@material-ui/icons/Edit";
// import DoneIcon from "@material-ui/icons/Done";

import Modal from "@material-ui/core/Modal";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
// import AddIcon from "@material-ui/icons/Add";
// import RemoveIcon from "@material-ui/icons/Remove";

const RegularMode = ({ ...props }) => {
  const { size, unit, setEditMode } = props;
  return (
    <React.Fragment>
      <Grid item xs={11}>{`${size} ${unit}`}</Grid>
      {/* <Grid item xs={1}>
        <IconButton aria-label="edit" onClick={() => setEditMode(true)}>
          <EditIcon />
        </IconButton>
      </Grid> */}
    </React.Fragment>
  );
};

const EditMode = ({ ...props }) => {
  const { size, unit, setEditMode } = props;

  return (
    <Modal open="true">
      <FormControl>
        <InputLabel id="select-label">Unit</InputLabel>
        <Select
          id="select"
          labelId="select-label"
          value={unit}
          onChange={() => console.log("changes")}
          input={<h1>hi</h1>}
        >
          <MenuItem value="tsp">Tsp</MenuItem>
        </Select>
      </FormControl>
    </Modal>
  );
};

const Yield = ({ amount }) => {
  const [size, unit] = amount;
  const [editMode, setEditMode] = useState(false);
  return (
    <Grid container direction="row" justify="space-evenly" alignItems="center">
      {!editMode && (
        <RegularMode size={size} unit={unit} setEditMode={setEditMode} />
      )}
      {editMode && (
        <EditMode size={size} unit={unit} setEditMode={setEditMode} />
      )}
    </Grid>
  );
};

export default Yield;
