Drone 服务配置

```javascript
docker run \
  --volume=/var/lib/front:/data \
	--env=DRONE_AGENTS_ENABLED=true \
  --env=DRONE_GITHUB_SERVER=https://github.com \
  --env=DRONE_GITHUB_CLIENT_ID=9f280329d52cf9e06013 \
  --env=DRONE_GITHUB_CLIENT_SECRET=53203c592e37b9815f299c24e7f8ca64bcb05ebc \
  --env=DRONE_RPC_SECRET=12345678 \
  --env=DRONE_SERVER_HOST=47.114.3.107 \
	--env=DRONE_RUNNER_CAPACITY=2 \
  --env=DRONE_SERVER_PROTO=http \
  // 80 和 443 端口 未使用 runner 的情况下固定
  --publish=8000:80 \
	--publish=3001:443 \
  --restart=always \
  --detach=true \
  --name=front \
  drone/drone:1
```

```
-A INPUT -m state –state NEW -m tcp -p tcp –dport 8088 -j ACCEPT
```

```
docker run -d \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -e DRONE_RPC_PROTO=http \
  -e DRONE_RPC_HOST= \
  -e DRONE_RPC_SECRET=123456 \
  -e DRONE_RUNNER_CAPACITY=2 \
  -e DRONE_RUNNER_NAME=${HOSTNAME} \
  -p 3000:3000 \
  --restart always \
  --name runner \
  drone/drone-runner-docker:1
```

Github 设置  `Authorization callback URL` 时 需要设置 返回的端口号和固定的 */login 链接

