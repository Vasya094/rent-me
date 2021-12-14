// Interface to defining our object of response functions
export interface ResponseFuncs {
    GET?: Function
    POST?: Function
    PUT?: Function
    DELETE?: Function
  }
  
  // Interface to define our Todo model on the frontend
  export interface Todo {
    _id?: number
    item: string
    completed: boolean
  }
  // Types for css theme
  export interface cssTheme {
    body: string;
    text: string;
    toggleBorder: string;
    background: string;
}
