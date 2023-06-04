interface Board {
  columns: Map<TypedColumns, Columns>;
}

type TypedColumn = "todo" | "inprogress" | "done";

interface Columns {
  id: TypedColumns;
  todos: Todo[];
}

interface Todo {
  $id: string;
  $createdAt: string;
  title: string;
  status: TypedColumns;
  image?: Image;
}

interface Image {
  bucketId: string;
  fileId: string;
}
