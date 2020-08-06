defmodule TodoElixirWeb.PageController do
  use TodoElixirWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
