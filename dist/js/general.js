const deleteRowInv = async (value) => {
  try {
    await axiosp.sendxhr.delete(`/v1/delInventario/${value}`)
    toastr.success(`Se elimino Correctamente ${value}`)
  } catch (error) {

  }
}