async function comment() {
  try {
    const response = await fetch(
      "http://jsonplaceholder.typicode.com/comments"
    );
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
}

comment()
  .then(res => {
    console.log(
      res.reduce((acc, ele) => {
        if (acc[ele.postId] !== undefined) {
          acc[ele.postId]++;
        } else {
          acc[ele.postId] = 1;
        }
        return acc;
      }, {})
    );
  })
  .catch(err => {
    console.log(err);
  });
