import {
  MY_PLANS_ACTIONS
} from '../constants'
import { urlFactory } from '../helpers'
import axios from 'axios'

const request = () => {
  return {
    type: MY_PLANS_ACTIONS.Requested
  }
}

const receive = (plans) => {
  return {
    type: MY_PLANS_ACTIONS.Received,
    payload: plans
  }
}

const error = (err) => {
  return {
    type: MY_PLANS_ACTIONS.Error,
    payload: err
  }
}

export const fetchMyPlans = () => {
  return async (dispatch) => {
    dispatch(request())

    try {
      const url = urlFactory.Plans.Own
      const response = await axios.get(url)
      dispatch(receive(response.data.plans))
    } catch (err) {
      dispatch(error(err))
    }
  }
}