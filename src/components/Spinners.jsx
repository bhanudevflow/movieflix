import React from "react";
import { Button, Spinner } from "flowbite-react";

function Spinners() {
  return (
    <div className="flex flex-row gap-3 align-center">
      <Button color="alternative">
        <Spinner aria-label="Alternate spinner button example" size="sm" />
        <span className="pl-3">Loading...</span>
      </Button>
    </div>
  );
}
export default Spinners;
