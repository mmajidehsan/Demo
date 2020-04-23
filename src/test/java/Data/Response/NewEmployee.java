package Data.Response;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class NewEmployee {
  int id;
  String name;
  int salary;
  int age;
}
