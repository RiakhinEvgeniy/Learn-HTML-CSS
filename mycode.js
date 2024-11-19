async function postData() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1
  };

  //TODO:
  let resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });

  let result = await resp.json();
  console.log(result);
}

postData();