import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Checkbox } from '.'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    labelColor: 'black'
  }
} as ComponentMeta<typeof Checkbox>

export const _Checkbox: ComponentStory<typeof Checkbox> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Action"
        labelFor="action"
        isChecked
        {...args}
      />
    </div>

    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Adventure"
        labelFor="adventure"
        {...args}
      />
    </div>

    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Strategy"
        labelFor="strategy"
        {...args}
      />
    </div>
  </>
)
