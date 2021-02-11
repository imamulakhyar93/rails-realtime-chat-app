![RSpec & Jest](https://github.com/imamulakhyar93/rails-realtime-chat-app/workflows/RSpec%20&%20Jest/badge.svg)

# rails-realtime-chat-app

![Screenshot](https://monosnap.com/image/qvFlRwM7RLRHeSZ5bVWcWMJMmQjFIY)

This is a demo realtime chat application build using ActionCable, Turbo, Stimulus and Tailwind. See the [demo](https://hotwire-rails-chat.herokuapp.com/) on heroku.

## Installation & Usage

Run following command to install bundle & dependencies:
- `bundle install`
- `yarn install` or `npm install`

Setup database `rails db:create && rails db:migrate`

Run your server `rails s`

## Testing

### Rspec

Run `rspec --format progress --format documentation --profile`

### Jest

Run `yarn test` or `npm test`
