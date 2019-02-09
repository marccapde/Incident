
const baseUrl = ""

const urlFactoryImplementation = {
  Plans: {
    Base: `${baseUrl}/plans`,
    Own: `${baseUrl}/plans?owner=me`,
    Detail: (planId) => `${baseUrl}/plans/${planId}`
  }
}

const urlFactoryMock = {
  Plans: {
    Base: "",
    Own: 'http://www.mocky.io/v2/5c58809d3200007100ba3477?mocky-delay=2000ms',
    Detail: (planId) => ""
  }
}

const urlFactory = urlFactoryMock

export { urlFactory }