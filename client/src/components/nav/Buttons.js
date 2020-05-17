import React from "react";
import { Button } from "reactstrap";

function Buttons() {
  return (
    <div>
      <Button href="/log-in/" className="mr-2">
        Log in
      </Button>
      <Button href="/register/" className="mr-2">
        Sign up
      </Button>
    </div>
  );
}

export default Buttons;
