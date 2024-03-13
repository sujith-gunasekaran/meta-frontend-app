const run = () => {
  function postConfigs() {
    return {
      test: 'test'
    }
  }
  
  function getConfigs(configs) {
    console.log(configs);
  }
  
  function validate() {
    return true;
  }

  window.postConfigs = postConfigs;
  window.getConfigs = getConfigs;
  window.validate = validate;
}

export default run;
