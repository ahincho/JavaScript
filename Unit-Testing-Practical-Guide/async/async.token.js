import jwt from "jsonwebtoken";

export function generateToken(userEmail, doneFn) {
  jwt.sign({ email: userEmail }, 'secret', doneFn);
}

export function generateTokenPromise(userEmail) {
  const promise = new Promise((resolve, reject) => {
    jwt.sign({ email: userEmail }, 'secret', (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
  });
  return promise;
}
