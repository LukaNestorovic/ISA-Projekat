import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/";

class AppointmentService {
    scheduleAppointment(data: any) {
        return axios.post(API_BASE_URL + "appointment/admin", data)
    }
    findAppointmentsAdmin() {
        return axios.get(API_BASE_URL + "appointment/admin")
    }
    findAppointments(role: any, enable:any) {
        return axios.get(API_BASE_URL + "appointments/" + enable + "/" + role)
    }
    updateAppointment(data: any) {
        return axios.put(API_BASE_URL + "appointment", data)
    }
    findScheduledAppointment(data: any, role:any, enable:any) {
        return axios.get(API_BASE_URL + "scheduledappointment/" + data + "/" + role + "/" + enable)
    }
    deleteAppointment(data: any) {
        return axios.put(API_BASE_URL + "deleteappointment", data)
    }
    findAppointmentsUser(data: any) {
        return axios.post(API_BASE_URL + "appointment/user", data)
    }
    enrollAppointmentsUser(data: any) {
        return axios.put(API_BASE_URL + "appointment/user", data)
    }
}

export default new AppointmentService();