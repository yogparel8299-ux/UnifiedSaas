import type { AgentTask } from "./task-types";
import type { AgentResult } from "./result-types";

export async function runTask(task: AgentTask): Promise<AgentResult> {
  return {
    success: true,
    message: "Task received successfully",
    output: {
      taskId: task.id,
      taskName: task.name,
      taskInput: task.input
    }
  };
}
