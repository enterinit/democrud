const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values /*, dispatch */) => {
  const htdsnames = JSON.stringify(window.localStorage.getItem('htds'));
console.log(htdsnames);
  return sleep(1000).then(() => {
    // simulate server latency
    if (htdsnames.includes(values.name)) {
      throw new Error ({ name: 'That username is taken' })
    }
  })
}

export default asyncValidate;