

export interface IUser {
  id: number;
  name: string;
  username: string;
  password?: string;
  token?: string;
}

export interface ITask {
  id: number;
  name: string;
  processName: string;
  creationTime: string;
  assignee: string | null;
  candidateGroups: string[];
  taskState: string;
  formKey: string;
  variables: IVariable[];
  processDefinitionId: string;
}

export interface IVariable {
  id: string;
  name: string;
  value: any;
  type: string;
}

export interface IProcess {
  key: number;
  name: string;
  version: number;
  bpmnProcessId: string;
}

export interface ITaskSearch {
  assignee: string | null;
  group: string | null;
  taskState: string | null;
  pageSize: number | null;
}

export interface ITaskContainer {
  task: ITask;
}
export interface ITaskListContainer {
  tasks: ITask[];
}
export interface IFormViewer {
  schema: string;
  variables: IVariable[] | undefined;
  disabled: boolean;
}