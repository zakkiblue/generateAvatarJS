# generateAvatarJS
Generating avatar based on intial username


## Using Alpine JS

example

```
<img x-data="{source : generateAvatar('John Doe')}" x-bind:src="source" alt="">
```

![example](https://user-images.githubusercontent.com/47022280/196087376-df1ef83b-a4b0-48ed-9acb-1a3e3af53e8b.png)

example alpine js with laravel

```
<img x-data="{source:''}"
     x-init="source=generateAvatar('{{$user->name}}')"
     x-bind:src="source" 
     alt="{{$user->name}}">
```
