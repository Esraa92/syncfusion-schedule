import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService,
   AgendaService, ResizeService, DragAndDropService, View, EventRenderedArgs } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'schedule-app';
  public currentView: View = 'Week';
  public selectedDate: Date = new Date(2021, 4, 11);

  public data: object[] = [
    {
    Id: 1,
    Subject: 'Meeting',
    StartTime: new Date(2021, 4, 11, 12, 0),
    EndTime: new Date(2021, 4, 11, 13, 0)
      },
      {
        Id: 2,
        Subject: 'Primera visita',
        StartTime: new Date(2021, 4, 11, 15, 10),
        EndTime: new Date(2021, 4, 11, 15, 45),
        CategoryColor: '#0dcaf0'
          },
          {
            Id: 3,
            Subject: 'Higienes',
            StartTime: new Date(2021, 4, 12, 10, 0),
            EndTime: new Date(2021, 4, 12, 10, 0),
            CategoryColor: '#d63384'
              }
      
    ];
      public eventSettings: EventSettingsModel = {
    dataSource: this.data
      }

      oneventRendered(args: EventRenderedArgs): void {
        let categoryColor: string = args.data.CategoryColor as string;
        if (!args.element || !categoryColor) {
            return;
        }
        if (this.currentView === 'Agenda') {
            (args.element.firstChild as HTMLElement).style.borderLeftColor = categoryColor;
        } else {
            args.element.style.backgroundColor = categoryColor;
        }
    }


}
