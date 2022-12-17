import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Radio } from '.'

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    onCheck: {
      action: 'checked'
    }
  },
  args: {
    labelColor: 'black'
  }
} as ComponentMeta<typeof Radio>

export const _Radio: ComponentStory<typeof Radio> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        name="name"
        id="first"
        label="Primeiro"
        labelFor="first"
        value="first"
        defaultChecked
        {...args}
      />
    </div>

    <div style={{ padding: 10 }}>
      <Radio
        name="name"
        id="second"
        label="Segundo"
        labelFor="second"
        value="second"
        {...args}
      />
    </div>

    <div style={{ padding: 10 }}>
      <Radio
        name="name"
        id="third"
        label="Terceiro"
        labelFor="third"
        value="third"
        {...args}
      />
    </div>
  </>
)
