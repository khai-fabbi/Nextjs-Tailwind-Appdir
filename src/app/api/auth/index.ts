import axiosClient from '@/app/api/axiosClient';

interface ILoginUser {
  email: string;
  password: string;
}
const authApi = {
  async signIn(payload: ILoginUser) {
    const url = '/users/login';
    const response = await axiosClient.post(url, payload);
    return response.data;
  },
  // async getDetailNews(id: string) {
  //   const url = `/api/new/${id}`
  //   const response = await axiosClient.get(url)
  //   return response.data
  // },
};

export default authApi;
