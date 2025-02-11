const os = require("os")

interface MemoryInfo {
  total: number;
  free: number;
}

interface CPUInfo {
  model: string;
  speed: number;
  times: {
    user: number;
    nice: number;
    sys: number;
    idle: number;
    irq: number;
  };
}

interface ServerInfo {
  cpu: CPUInfo[];
  platform: NodeJS.Platform;
  arch: string;
  release: string;
  loadavg: number[];
  memory: MemoryInfo;
  hostName: string;
  upTime: number;
}

const getServerInfo = (): ServerInfo => {
  return {
    cpu: os.cpus(), 
    platform: os.platform(),
    arch: os.arch(),
    release: os.release(),
    loadavg: os.loadavg(),
    memory: {
      total: os.totalmem(),
      free: os.freemem(),
    },
    hostName: os.hostname(), 
    upTime: os.uptime(), 
  };
};

module.exports = getServerInfo;
