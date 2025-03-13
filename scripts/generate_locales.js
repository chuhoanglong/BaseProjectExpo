const axios = require("axios")
const fs = require("fs")
const output = process.cwd() + "/app/i18n/lang"

const instanceWhitelist = axios.create({
  baseURL: "https://script.googleusercontent.com/",
  timeout: 1000000,
  headers: {},
})

const useLocales = async () => {
  return await instanceWhitelist.get("macros/echo", {
    params: {
      user_content_key:
        "AehSKLi3eXhaiDVqUGUw0TxG9YiFiiuiuEp_AIcwVBj5P9A4cV1KWc3XFh6IFD3Om66R0JyXLWIpYGEv4THWXuzZJnMyP6ImsY71NEHDawUtrP3yfK6HMKW6kMcLjHwHm4frmcUm8MMuotKzQvtc7hZKNsihyg3yEC9o-T9oF4xJii6t4pVzN4RQ60Mt8k8JV3kQ_nMULl505wbOTI6gpnWGjYrRcrj7VR7X09vSgOQ4AHJI0DMBFOt6Sy7WXwJ-zAnmgihk-5XozO-jZBusBlsOyOwYEngrZLWnYSX7zeG9",
      lib: "MW8Fqu1n8r2HlT-PiB4AKbbgZgG9b7c4z",
    },
  })
}

const handlerLocales = async () => {
  const response = await useLocales()
  if (response) {
    const { data } = response || {}
    ///Generate locale folder
    Object.keys(data).forEach((key) => {
      const dir = `${output}/${key}`
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
      }
      let formatData = JSON.stringify(data[key], null, 2)
      fs.writeFile(`${dir}/translation.json`, formatData, (err) => {
        if (err) {
          console.error(err)
        }
      })
    })
  }
}

// all in one
handlerLocales()
