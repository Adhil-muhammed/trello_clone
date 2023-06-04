import { databases } from "@/appwrite";

export const getTodosGroupedByColum = async () => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!
  );
  const todos = data?.documents;
  const columns = todos?.reduce((acc, todo) => {
    if (!acc.get(todo?.status)) {
      acc?.set(todo?.status, {
        id: todo?.status,
        todos: [],
      });
    }

    acc?.get(todo?.status)?.todos?.push({
      $createdAt: todo?.$createdAt,
      $id: todo?.$id,
      status: todo?.status,
      title: todo?.title,
      image: todo?.image && todo?.image,
      // ...(todo?.image && { image: todo.image }),
    });
    return acc;
  }, new Map<TypedColumn, Columns>());

  const columnTypes: TypedColumn[] = ["done", "inprogress", "todos"];

  for (const columnType of columnTypes) {
    if (!columns.get(columnType)) {
      columns.set(columnType, {
        id: columnTypes,
        todos: [],
      });
    }
  }

  // sortingc columns

  const sortedColumns = new Map(
    Array.from(columns.entries()).sort(
      (a, b) => columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
    )
  );
  // console.log("todos: ", columns);
  // console.log("sortedColumns: ", sortedColumns);

  const board: Board = {
    columns: sortedColumns,
  };
  return board;
};
