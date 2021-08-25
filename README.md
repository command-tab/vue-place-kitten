# place-kitten

A Vue component to display a placeholder kitten image from [placekitten](https://placekitten.com/)

## Installation

Command line with `npm`:

    npm install --save @command-tab/place-kitten

Or, command line with `yarn`:

    yarn add @command-tab/place-kitten

Vue project:

    <template>
      <place-kitten :width="400" :height="200" />
    </template>

    <script>
      import PlaceKitten from '@command-tab/place-kitten'
      
      export default {
        components: {
          /* other components here */
          PlaceKitten
        }
      }
    </script>

## Props

| Prop   | Required | Type   | Default | Description  |
|--------|----------|--------|------------------------|
| width  | No       | Number | 200     | Image width  |
| height | No       | Number | 200     | Image height |
