# generateAvatarJS
Generating avatar based on intial username


## Using Alpine JS

example

```
<img x-data="{source : generateAvatar('John Doe')}" x-bind:src="source" alt="">
```


example alpine js with laravel

```
<img x-data="{source:''}"
     x-init="source=generateAvatar('{{$user->name}}')"
     x-bind:src="source" 
     alt="{{$user->name}}">
```
