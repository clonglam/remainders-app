import axios from "axios";
import { title } from "process";
import IReminder from "../../models/reminder";

class ReminderService {
  http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
  });

  async getReminders() {
    const response = await this.http.get<IReminder[]>("/todos");
    return response.data;
  }

  async addReminder(title: string) {
    const response = await this.http.post<IReminder>("/todos", { title });
    return response.data;
  }

  async removeReminder(id: number) {
    const response = await this.http.delete("/todos/" + id);
    return response.data;
  }
}

export default new ReminderService();
