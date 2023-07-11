import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title : string;
  containerStyle: string;
  handleClick? : MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit"
}


export interface Product {
  id: number,
  title: string,
  description?: string,
  price: number,
  discountPercentage?: number,
  rating?: number,
  stock: number,
  brand?: string,
}

// export type BooleanClickHandler = (isOpen : boolean) => void

// export interface AlertDialogProps {
//   handleClickOpen : BooleanClickHandler,
//   handleClickClose : BooleanClickHandler,
//   onClickAgree : () => void
// }
