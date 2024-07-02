import React from "react";

const FootNote = () => {
  return (
    <div className="pt-5 border-t border-dashed border-black mt-10 flex justify-between">
      <p className="text-xs">&copy;2022. All Rights Reserved. Pod of Cast</p>
      <div className="text-xs flex items-center gap-2">
        <span>Term</span>
        <span>•</span>
        <span>Privacy</span>
      </div>
    </div>
  );
};

export default FootNote;
