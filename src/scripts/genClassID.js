const uniqueId = (length = 16) => {
    return parseInt(
      Math.ceil(Math.random() * Date.now())
        .toPrecision(length)
        .toString()
        .replace(".", "")
    );
  };
  
  //generates a 16 integer long ID
  export default function genClassID() {
    return uniqueId();
  }