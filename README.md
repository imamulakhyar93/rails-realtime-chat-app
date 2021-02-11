![RSpec & Jest](https://github.com/imamulakhyar93/rails-realtime-chat-app/workflows/RSpec%20&%20Jest/badge.svg)

# rails-realtime-chat-app

![Screenshot](https://d960fn7fik8w3.cloudfront.net/ms_341664/kWtNMEZJ0UTuuavQut8k5V2uB0pSoD/DemoChatApp%2B2021-02-11%2B11-40-26.jpg?Expires=1613019600&Signature=TyYBeUJJdGS8gJLDHw5GGBVdF-l0N6zEEnOZye7OhbMgdnQkNnp1UzW2eQHCF0f66tJkUFrrko7OS0IkGXaPuxS20vYbWWsyn6XCaL6XVMfnJvanbY-4FlPzs9OTQDLIat5YQtjEoISOf2XpqIcUMAWvuJZH7MOldH8S0ft~K~MXi8hth6dvZMu3nyNGaE2coY4O5-yYoAXT1G74OEg8or-OxuWzXFowIaluMKo3ArUV00SDlnALExPDbR14JnHla~YGSXp1WQznxqBEb7DuL519gSA75XXVxVsglWEMFtXmCZAaDzauk0D3XsQS359aF0XLRRh9ClpaEndamtNmvg__&Key-Pair-Id=APKAJBCGYQYURKHBGCOA)

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
