export const MOCK_HARDWARE_TOGGLES = [
  {
    id: 'core_turbine_a',
    label: 'CORE_TURBINE_A',
    statusLabel: 'STATUS_ACTIVE',
    statusColor: 'primary',
    isActive: true,
  },
  {
    id: 'valve_system_b',
    label: 'VALVE_SYSTEM_B',
    statusLabel: 'MANUAL_BYPASS',
    statusColor: 'zinc',
    isActive: false,
  },
  {
    id: 'thermal_reg',
    label: 'THERMAL_REG',
    statusLabel: 'WARNING_LVL_2',
    statusColor: 'amber',
    isActive: true,
  },
];

export const MOCK_SUB_PROCESSES = [
  { id: 'memory_cells', label: 'MEMORY_CELLS', icon: 'storage' },
  { id: 'firewall_root', label: 'FIREWALL_ROOT', icon: 'security' },
  { id: 'network_map', label: 'NETWORK_MAP', icon: 'hub' },
];

export const MOCK_STATS = [
  {
    id: 'pwr_draw',
    label: 'PWR_DRAW',
    statusLabel: 'STABLE',
    statusColor: 'primary',
    value: '824.5',
    unit: 'KW',
    percentage: 72,
  },
  {
    id: 'therm_ld',
    label: 'THERM_LD',
    statusLabel: 'RISING',
    statusColor: 'amber',
    value: '48.2',
    unit: '°C',
    percentage: 48,
  },
  {
    id: 'cache_ut',
    label: 'CACHE_UT',
    statusLabel: 'PEAK',
    statusColor: 'primary',
    value: '92.1',
    unit: '%',
    percentage: 92,
  },
  {
    id: 'net_lat',
    label: 'NET_LAT',
    statusLabel: 'NOMINAL',
    statusColor: 'primary',
    value: '0.08',
    unit: 'MS',
    percentage: 15,
  },
];

export const MOCK_OPERATORS = [
  {
    id: 'admin_klyne',
    name: 'ADMIN_KLYNE',
    role: 'SUPERVISOR_MODE',
    statusColor: 'primary',
    icon: 'person',
  },
  {
    id: 'tech_drake',
    name: 'TECH_DRAKE',
    role: 'STATION_04_LOC',
    statusColor: 'zinc',
    icon: 'person',
  },
  {
    id: 'eng_vance',
    name: 'ENG_VANCE',
    role: 'MAINT_REQUIRED',
    statusColor: 'amber',
    icon: 'engineering',
  },
];

export const MOCK_LOGS = [
  {
    id: 'log_1',
    timestamp: '[14:34:01]',
    type: 'SYS_INFO',
    message: 'HANDSHAKE_ESTABLISHED_DELTA_NODE',
    color: 'zinc',
  },
  {
    id: 'log_2',
    timestamp: '[14:34:22]',
    type: 'AUTH_REQ',
    message: 'IDENTITY_VERIFIED_BIOMETRIC_RELAY_SUCCESS',
    color: 'primary',
  },
  {
    id: 'log_3',
    timestamp: '[14:35:05]',
    type: 'WARN_PKT',
    message: 'PACKET_LOSS_DETECTED_LINE_7G_CRITICAL',
    color: 'red',
  },
  {
    id: 'log_4',
    timestamp: '[14:35:12]',
    type: 'NET_REOUTE',
    message: 'DIVERSION_THRU_SUB_SILO_01_COMPLETE',
    color: 'zinc',
  },
  {
    id: 'log_5',
    timestamp: '[14:36:00]',
    type: 'THRM_ALRT',
    message: 'THERMAL_THRESHOLD_APPROACHING_LIMITS',
    color: 'amber',
  },
];

export const MOCK_DIAGNOSTICS = [
  { id: 'cpu', label: 'CPU', value: '0.02%', color: 'primary' },
  { id: 'net', label: 'NET', value: '1.2GB/S', color: 'primary' },
  { id: 'io_b', label: 'IO_B', value: 'BUSY', color: 'amber' },
];
