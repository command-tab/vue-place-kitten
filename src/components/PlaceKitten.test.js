import { mount } from '@vue/test-utils'
import PlaceKitten from './PlaceKitten'

const defaultOptions = {
  propsData: {
    width: 400,
    height: 200
  }
}

describe('PlaceKitten', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(PlaceKitten, defaultOptions)
    expect(wrapper.exists()).toBeTruthy()
  })

  test('renders a valid img tag', () => {
    const wrapper = mount(PlaceKitten, defaultOptions)
    const img = wrapper.find('img')
    expect(img.element.tagName).toBe('IMG')
  })

  test('applies props to url path', () => {
    const wrapper = mount(PlaceKitten, defaultOptions)
    expect(wrapper.attributes('src')).toBe('https://placekitten.com/400/200')
  })
})
