import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL ||"http://localhost:3000/api/v1",
  headers: {
    'Content-Type': 'application/json',
  },
});

const getToken = () => localStorage.getItem('authToken');

api.interceptors.request.use(
  config => {
    const token = getToken();

    const skipAuthRoutes = ['/auth/login', '/auth/logout'];
    const shouldSkip = skipAuthRoutes.some(route => config.url?.includes(route));

    if (token && !shouldSkip) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => Promise.reject(error)
);

api.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);

const userManagement = {
  UserById: (id) => api.get("user", id),
  getUsersByQuery: ({ superAdminId, adminId, role, search }) =>
    api.get("/user/users", {
      params: {
        superAdminId,
        adminId,
        role,
        search,
      },
    }),

  updateUserById: (id, data) => api.patch(`/user/update-user/${id}`, data),
  createUser: (data) => api.post("/user/create-user", data),
  deleteUserById: (id) => api.delete(`/user/delete-user/${id}`),
};

const meterManagement = {
  getAllMeters: () => api.get('/meter'),
}

const userDashboard = {
  init: (id) => api.get(`/user/dashboard/init/${id}`),//intital data that have all the dashbaord data.
}
const authApis = {
  login: (credential) => api.post('/auth/login', credential),
  logout: () => api.post('/auth/logout'),
}

const userApi = {
  profile: () => api.get('auth/profile')
}

const meterApi = {
  getMeterById: (id) => api.get(`/meter/${id}`),
  getAllMeter: () => api.get('meter/get-all-meter'),
  addMeter: (data) => api.post('meter/create', data),
  asignMeter: (data) => api.post('meter/assign-meter', data),
  updateMeter: (id) => api.put(`/meter/update/${id}`),
  deleteMeter: (id) => api.delete(`/meter/update/${id}`),
  getAllMeterFromIOT: () => api.get('/meter/get-all-meter-from-iot'),
  getMeterByMeterId: (meterId, params = {}) =>api.get(`/meter/by-meterId/${meterId}`, { params }),
  getAllMeterWithPayment:() => api.get(`meter//get-all-meter-with-payment`),
}


export const adminDashboard = {
  getRecentData: (adminId) => api.get(`user/adminDashboard/recent-data/${adminId}`),
  getAdminDailyConsumption: (adminId) => api.get(`user/adminDashboard/get-admin-daily-consumption/${adminId}`),
  getFilteredChartData: ({ adminId, from, to }) => {
    const params = {};
    if (from && to) {
      params.from = from;
      params.to = to;
    }
    return api.get(`user/adminDashboard/get-admin-daily-consumption/${adminId}`, { params });
  },
  getAdminUserMeterData: (adminId) => api.get(`user/adminDashboard/get-userdata-by-admin/${adminId}`),
  getMeterListByAdmin: (adminId) => api.get(`user/adminDashboard/get-meter-by-admin/${adminId}`),
};
const paymentApi = {
  getPaymentHistoryById :(meterId, params={})=> api.get(`user/get-payment-history-by/${meterId}`,{params})
}


const notificationApi = {
  getAdminNotifications: (adminId) => api.get(`/notifications/admin/${adminId}`),
  getSystemNotifications: (adminId) => api.get(`/notifications/system/${adminId}`),
  getUserNotifications: (userId) => api.get(`/notifications/user/${userId}`),
  toggleNotificationStatus: ({ notificationId, status }) =>
    api.patch(`/notifications/${notificationId}/status`, { status }),
};
export { userManagement, meterManagement, authApis, userDashboard, userApi, meterApi,paymentApi ,  notificationApi }