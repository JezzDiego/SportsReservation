import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function Home() {
  const reservations = await fetch(`${process.env.API_BASE_URL}/reservations`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw new Error(error);
    });

  return (
    <div className="max-w-max m-auto border border-muted-foreground rounded-md">
      <Table>
        <TableCaption>Lista de reservas</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Reserva</TableHead>
            <TableHead>Início</TableHead>
            <TableHead>Término</TableHead>
            <TableHead>Esporte</TableHead>
            <TableHead>Curso</TableHead>
            <TableHead>Turma</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reservations.map((reservation: Reservations) => {
            const date = new Date(
              reservation.reservation_date
            ).toLocaleDateString("pt-BR", {
              timeZone: "UTC",
            });

            if (
              new Date(
                reservation.reservation_date +
                  " " +
                  reservation.end_time +
                  " " +
                  "GMT-0000"
              ) < new Date()
            )
              return;
            return (
              <TableRow key={reservation.id}>
                <TableCell>{reservation.id}</TableCell>
                <TableCell>{reservation.client_name}</TableCell>
                <TableCell>{date}</TableCell>
                <TableCell>{reservation.start_time}h</TableCell>
                <TableCell>{reservation.end_time}h</TableCell>
                <TableCell>{reservation.sport_type}</TableCell>
                <TableCell>{reservation.course}</TableCell>
                <TableCell>{reservation.class}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
