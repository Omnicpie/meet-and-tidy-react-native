import React from 'react';

class Request {
  constructor(method, url) {
    this.method = method;
    this.url = url;
  }
 async make() {
    
    try {
        const response = await fetch("http://localhost:1337/events/", {
            method: 'GET',
            headers: {
              Accept: "Access-Control-Allow-Origin",
              'Content-Type': 'application/json',
              
            },
            credentials: 'same-origin',
          });
        const data = await response();

        return await Promise.resolve(data);

    } catch (e) {
        console.log("ERROR" + e);

        return Promise.reject();
      }
  }
}

export default Request;


async function make() {
    try {
        const response = await fetch("http://localhost:1337/events/", {
        method: 'GET',
        headers: {
          Accept: "Access-Control-Allow-Origin",
          'Content-Type': 'application/json',
          
        },
        credentials: 'same-origin',
      });
            const data = await response;
    
            return await Promise.resolve(data);
    
        }catch (e) {
            console.log("ERROR" + e);
    
            return Promise.reject();
          }
    }
    make();


/* 
async function make() {
    try {
            const response = await fetch("http://localhost:1337/events/", {
        method: 'GET',
        headers: {
          Accept: '', 
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        credentials: 'same-origin',
      });
            const data = await response;
    
            return await Promise.resolve(data);
    
        }catch (e) {
            console.log("ERROR" + e);
    
            return Promise.reject();
          }
    }
    make(); */