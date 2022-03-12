import Skeleton from '@mui/material/Skeleton';
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Card,
  Box
} from "@material-ui/core";

export default function TableSkeleton({ ...props }) {
  const skeletonArray = Array(10).fill('');
  const headerArray = Array(5).fill('');
  return (
        <Card sx={{ maxWidth: 345 }}>
            <Box paddingTop = {3} paddingLeft = {3} paddingBottom = {2}>
                <Skeleton  variant="rectangular" width={190} height={30} />
            </Box>
            <Table  className="mb-0">
            <TableHead>
                <TableRow>
                {headerArray.map(key => (
                    <TableCell key={key}><Skeleton height={30}/></TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {skeletonArray.map(({ item,index }) => (
                <TableRow key={index}>
                    <TableCell className="pl-3 fw-normal"><Skeleton /></TableCell>
                    <TableCell><Skeleton /></TableCell>
                    <TableCell><Skeleton /></TableCell>
                    <TableCell><Skeleton /></TableCell>
                    <TableCell><Skeleton /></TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
    </Card>
  );
}
