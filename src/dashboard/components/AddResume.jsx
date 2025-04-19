import { PlusSquare } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AddResume = () => {

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div>
      <div onClick={()=> setOpenDialog(true)} className="bg-secondary shadow-md rounded-lg p-14 flex flex-col items-center justify-center h-60 w-40 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
        <PlusSquare />
      </div>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a New Resume</DialogTitle>
            <DialogDescription>
              <p>Enter the title of your resume</p>
              <Input className="my-2" placeholder="Ex: Front End Developer"/>

            </DialogDescription>

            <div className="flex justify-end gap-2 mt-4">
              <Button onClick={() => setOpenDialog(false)} variant='ghost'>Cancel</Button>
              <Button>Create</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddResume;
