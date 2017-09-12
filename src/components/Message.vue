<template xmlns="http://www.w3.org/1999/html">
  <div v-bind:class="msg.type">
      <div class="message " :class="msg.style">
        {{msg.text}}
        <span class="metadata">
          <span class="time"></span>
              <span class="tick">
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="16"
                   height="15"
                   id="msg-dblcheck-ack"
                   x="2063"
                   y="2076">
                <path
                  d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                  fill="#4fc3f7"/>
              </svg>
            </span>
        </span>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'chatty-message',
    props: ['msg'],
    created () {
      console.log(this.msg)
    }
  }
</script>

<style>
  /* Conversation */

  .conversation {
    height: calc(100% - 12px);
    position: relative;
    background: #efe7dd url("https://cloud.githubusercontent.com/assets/398893/15136779/4e765036-1639-11e6-9201-67e728e86f39.jpg") repeat;
    z-index: 0;
  }

  .conversation ::-webkit-scrollbar {
    transition: all .5s;
    width: 5px;
    height: 1px;
    z-index: 10;
  }

  .conversation ::-webkit-scrollbar-track {
    background: transparent;
  }

  .conversation ::-webkit-scrollbar-thumb {
    background: #b3ada7;
  }

  .conversation .conversation-container {
    height: calc(100% - 68px);
    box-shadow: inset 0 10px 10px -10px #000000;
    overflow-x: hidden;
    padding: 0 16px;
    margin-bottom: 5px;
  }

  .conversation .conversation-container:after {
    content: "";
    display: table;
    clear: both;
  }

  /* Messages */

  .message {
    color: #000;
    clear: both;
    line-height: 18px;
    font-size: 15px;
    padding: 8px;
    position: relative;
    margin: 8px 0;
    max-width: 85%;
    word-wrap: break-word;
    z-index: -1;
  }

  .message:after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
  }

  .metadata {
    display: inline-block;
    float: right;
    padding: 0 0 0 7px;
    position: relative;
    bottom: -4px;
  }

  .metadata .time {
    color: rgba(0, 0, 0, .45);
    font-size: 11px;
    display: inline-block;
  }

  .metadata .tick {
    display: inline-block;
    margin-left: 2px;
    position: relative;
    top: 4px;
    height: 16px;
    width: 16px;
  }

  .metadata .tick svg {
    position: absolute;
    transition: .5s ease-in-out;
  }

  .metadata .tick svg:first-child {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: perspective(800px) rotateY(180deg);
    transform: perspective(800px) rotateY(180deg);
  }

  .metadata .tick svg:last-child {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: perspective(800px) rotateY(0deg);
    transform: perspective(800px) rotateY(0deg);
  }

  .metadata .tick-animation svg:first-child {
    -webkit-transform: perspective(800px) rotateY(0);
    transform: perspective(800px) rotateY(0);
  }

  .metadata .tick-animation svg:last-child {
    -webkit-transform: perspective(800px) rotateY(-179.9deg);
    transform: perspective(800px) rotateY(-179.9deg);
  }

  .message:first-child {
    margin: 16px 0 8px;
  }

  .message.received {
    background: #fff;
    border-radius: 0px 5px 5px 5px;
    float: left;
  }

  .message.received .metadata {
    padding: 0 0 0 16px;
  }

  .message.received:after {
    border-width: 0px 10px 10px 0;
    border-color: transparent #fff transparent transparent;
    top: 0;
    left: -10px;
  }

  .message.sent {
    background: #e1ffc7;
    border-radius: 5px 0px 5px 5px;
    float: right;
  }

  .message.sent:after {
    border-width: 0px 0 10px 10px;
    border-color: transparent transparent transparent #e1ffc7;
    top: 0;
    right: -10px;
  }

  /* Compose */

  .conversation-compose {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    overflow: hidden;
    height: 50px;
    width: 100%;
    z-index: 2;
  }

  .conversation-compose div,
  .conversation-compose input {
    background: #fff;
    height: 100%;
  }

  .conversation-compose .emoji {
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 5px 0 0 5px;
    flex: 0 0 auto;
    margin-left: 8px;
    width: 48px;
  }

  .conversation-compose .input-msg {
    border: 0;
    flex: 1 1 auto;
    font-size: 16px;
    margin: 0;
    outline: none;
    min-width: 50px;
  }

  .conversation-compose .photo {
    flex: 0 0 auto;
    border-radius: 0 0 5px 0;
    text-align: center;
    position: relative;
    width: 48px;
  }

  .conversation-compose .photo:after {
    border-width: 0px 0 10px 10px;
    border-color: transparent transparent transparent #fff;
    border-style: solid;
    position: absolute;
    width: 0;
    height: 0;
    content: "";
    top: 0;
    right: -10px;
  }

  .conversation-compose .photo i {
    display: block;
    color: #7d8488;
    font-size: 24px;
    transform: translate(-50%, -50%);
    position: relative;
    top: 50%;
    left: 50%;
  }

  .conversation-compose .send {
    background: transparent;
    border: 0;
    cursor: pointer;
    flex: 0 0 auto;
    margin-left: 8px;
    margin-right: 8px;
    padding: 0;
    position: relative;
    outline: none;
  }

  .conversation-compose .send .circle {
    background: #008a7c;
    border-radius: 50%;
    color: #fff;
    position: relative;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .conversation-compose .send .circle i {
    font-size: 24px;
    margin-left: 5px;
  }

  /* Small Screens */

  @media (max-width: 768px) {
    .marvel-device.nexus5 {
      border-radius: 0;
      flex: none;
      padding: 0;
      max-width: none;
      overflow: hidden;
      height: 100%;
      width: 100%;
    }

    .marvel-device > .screen .chat {
      visibility: visible;
    }

    .marvel-device {
      visibility: hidden;
    }

    .marvel-device .status-bar {
      display: none;
    }

    .screen-container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .conversation {
      height: calc(100vh - 55px);
    }
    .conversation .conversation-container {
      height: calc(100vh - 120px);
    }
  }
</style>
