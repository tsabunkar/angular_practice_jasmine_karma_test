export class DataService {

  getSurNameFromBackend() {

    const resultPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Sabunkar');
      }, 2000);
    });

    return resultPromise;

  }

}
