type StatusProps = {
  status: 'loading' | 'success' | 'error'
}

const Status = ({ status }: StatusProps) => {
  let message

  if (status === "loading") {
    message = "Loading..."
  } else if (status === "success"){
    message = "Success!"
  } else if (status === "error") {
    message = "Error!"
  }

  return (
    <div>Status - {message}</div>
  )
}

export default Status