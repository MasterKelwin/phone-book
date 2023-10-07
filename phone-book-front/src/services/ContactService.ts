import client from '../client/client'
import axios from 'axios';
import { IContact } from '../interfaces/contact.interface';

const ContactService = {
  read: async () => {
    if(client.defaults.baseURL) {
      try {
        const response = await axios.get(client.defaults.baseURL);
        return response.data.res;
      } catch (e) {
        console.log('Error fetching data: ', e)
      }
    }
  },

  search: async (lastname:any) => {
    if(client.defaults.baseURL) {
      try {
        const response = await client.get<any>('/filter',  {
          data: {
            lastname: lastname,
          },
        });
        return response;
      } catch (e) {
        console.log('Error fetching data: ', e)
      }
    }
  },

  delete: async (id:number) => {
    if(client.defaults.baseURL) {
      try { 
        const response = await axios.delete(`${client.defaults.baseURL}/${id}`);
        return response.data;
      } catch (e) {
        console.log('Error fetching data: ', e)
      }
    }
  },


  create: async (contact:Partial<IContact>) => {
    if(client.defaults.baseURL) {
      if(contact.id) {
        try {
          const response = await axios.put(`${client.defaults.baseURL}/${contact.id}`, contact);
          return response.data;
        } catch (e) {
          console.log('Error fetching data: ', e)
        }
      } else {
        try {
          const response = await axios.post(client.defaults.baseURL, contact);
          return response.data;
        } catch (e) {
          console.log('Error fetching data: ', e)
        }
      }
    }
  },

  show: async (id:number) => {
    if(client.defaults.baseURL) {
      try { 
        const response = await axios.get(`${client.defaults.baseURL}/${id}`);
        return response.data.res;
      } catch (e) {
        console.log('Error fetching data: ', e)
      }
    }
  }
}

export default ContactService;