const mockEvent = {
    target: {
      appendChild(imageElement) {
          console.log(imageElement);
        },
        classList: {
          add(something) {
              console.log(something)
          } ,
        },
      dataset: {
        datasymbol: "",
      },
    },
  };

  export default mockEvent;