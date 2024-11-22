

enum Status {
  Active = 'Active',
  Inactive = 'Inactive',
  Pending = 'Pending',
}

type StatusBadgeProps = {
  status: Status;
};

const StatusBadge = ({ status }: StatusBadgeProps) => <span className={`badge ${status}`}>{status}</span>;

export default StatusBadge;
