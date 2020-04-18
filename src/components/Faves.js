import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CardButton from "./CardButton";
import SubstituteCard from "./SubstituteCard";

/*
favorites = {
  INGREDIENTKEY: [array of ids]
}
*/

const Faves = ({ ...props }) => {
  const { favorites, setFavorites, data } = props;
  const [showDialog, setshowDialog] = useState(false);
  const [dialogBody, setDialogBody] = useState(null);
  const keys = Object.keys(favorites);

  return (
    <React.Fragment>
      <h1>Faves</h1>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {keys.map((key) => (
          <Grid
            item
            key={key}
            onClick={() => {
              setshowDialog(true);
              setDialogBody(data[key]);
            }}
            style={{ width: "40%" }}
          >
            <CardButton name={data[key]["name"]} src={key} path={"/faves"} />
          </Grid>
        ))}
      </Grid>
      {dialogBody && (
        <Dialog
          open={showDialog}
          onClose={() => setshowDialog(false)}
          scroll="paper"
        >
          <DialogTitle>{dialogBody.name.toUpperCase()}</DialogTitle>
          <DialogContent>
            {dialogBody["substitutes"].map((substitute) => (
              <SubstituteCard data={substitute} />
            ))}
          </DialogContent>
        </Dialog>
      )}
    </React.Fragment>
  );
};

export default Faves;
