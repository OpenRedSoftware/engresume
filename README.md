### Running the app

#### Upgrade to latest LTS node

```nvm use lts/*```

#### Install all the packages

```yarn```

#### Run the app

```yarn start```

#### Run the app tests

```yarn test```

### Firebase Stuff

#### Make a new release to EngResume.com

```yarn build```

```firebase deploy -m "New update"```

## Debugging

`Error: ENOSPC: System limit for number of file watchers reached, watch ...`

* On Arch Linux, run `echo fs.inotify.max_user_watches=524288 | sudo tee /etc/sysctl.d/40-max-user-watches.conf && sudo sysctl --system`